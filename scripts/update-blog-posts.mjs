import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const outputPath = join(root, 'public', 'blog-posts.json');
const rssUrl = process.env.TISTORY_RSS_URL ?? 'https://archiventum.tistory.com/rss';

function getTagValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match?.[1]?.trim() ?? '';
}

function decodeCdata(value) {
  return value.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(value) {
  return decodeEntities(decodeCdata(value))
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseTags(itemXml) {
  return Array.from(itemXml.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi))
    .map((match) => stripHtml(match[1]))
    .filter(Boolean);
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(stripHtml(value));
  return Number.isNaN(date.getTime()) ? stripHtml(value) : date.toISOString().slice(0, 10);
}

function parseRss(xml) {
  return Array.from(xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi))
    .slice(0, 10)
    .map((match) => {
      const itemXml = match[1];
      const description = stripHtml(getTagValue(itemXml, 'description'));

      return {
        title: stripHtml(getTagValue(itemXml, 'title')),
        url: stripHtml(getTagValue(itemXml, 'link')),
        publishedAt: formatDate(getTagValue(itemXml, 'pubDate')),
        tags: parseTags(itemXml),
        summary: description.slice(0, 150),
      };
    })
    .filter((post) => post.title && post.url);
}

async function main() {
  try {
    const response = await fetch(rssUrl);
    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`);
    }

    const xml = await response.text();
    const posts = parseRss(xml);

    if (!existsSync(join(root, 'public'))) {
      mkdirSync(join(root, 'public'));
    }

    writeFileSync(outputPath, `${JSON.stringify(posts, null, 2)}\n`);
    console.log(`Wrote ${posts.length} blog posts to public/blog-posts.json`);
  } catch (error) {
    console.warn(`Could not update blog posts from RSS. Keeping existing file if present. ${error.message}`);
    if (!existsSync(outputPath)) {
      writeFileSync(outputPath, '[]\n');
    }
  }
}

await main();
