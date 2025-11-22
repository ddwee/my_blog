import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'articles'>;

// IDから.md拡張子を除去するヘルパー関数
function removeExtension(id: string): string {
  return id.replace(/\.md$/, '');
}

// 記事IDから日付順にソートされた記事リストを取得
export async function getSortedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('articles');
  return posts.sort((a, b) => {
    const aId = removeExtension(a.id);
    const bId = removeExtension(b.id);
    return bId.localeCompare(aId);
  });
}

// 記事IDのリストを取得（拡張子なし）
export async function getPostIds(): Promise<string[]> {
  const posts = await getSortedPosts();
  return posts.map(post => removeExtension(post.id));
}

// カテゴリのリストを取得
export async function getCategories(): Promise<string[]> {
  const posts = await getCollection('articles');
  const categories = new Set(posts.map(post => post.data.category));
  return Array.from(categories);
}

// タグのリストを取得
export async function getTags(): Promise<string[]> {
  const posts = await getCollection('articles');
  const tags = new Set<string>();
  posts.forEach(post => {
    post.data.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
}

// カテゴリで記事をフィルタ
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getSortedPosts();
  return posts.filter(post => post.data.category === category);
}

// タグで記事をフィルタ
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getSortedPosts();
  return posts.filter(post => post.data.tags?.includes(tag));
}

// 年月で記事をフィルタ
export async function getPostsByYearMonth(yearMonth: string): Promise<BlogPost[]> {
  const posts = await getSortedPosts();
  return posts.filter(post => {
    const postId = removeExtension(post.id);
    return postId.startsWith(yearMonth);
  });
}

// 年月のリストを取得
export async function getYearMonths(): Promise<string[]> {
  const posts = await getSortedPosts();
  const yearMonths = new Set(
    posts.map(post => {
      const postId = removeExtension(post.id);
      return postId.substring(0, 6);
    })
  );
  return Array.from(yearMonths).sort((a, b) => b.localeCompare(a));
}

// アーカイブデータを生成
export async function getArchiveData(): Promise<Record<string, Record<string, number>>> {
  const posts = await getSortedPosts();
  const archiveData: Record<string, Record<string, number>> = {};
  
  posts.forEach(post => {
    const postId = removeExtension(post.id);
    const year = postId.substring(0, 4);
    const month = postId.substring(4, 6);
    
    if (!archiveData[year]) {
      archiveData[year] = {};
    }
    if (!archiveData[year][month]) {
      archiveData[year][month] = 0;
    }
    archiveData[year][month]++;
  });
  
  return archiveData;
}

// IDから記事を取得（拡張子の有無に対応）
export async function getPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await getCollection('articles');
  // 拡張子なしのIDで検索
  const cleanId = removeExtension(id);
  return posts.find(post => removeExtension(post.id) === cleanId);
}