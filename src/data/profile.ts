export type ProfileLink = {
  id: string;
  title: string;
  url: string;
};

// 링크는 임시 값입니다. 실제 값으로 바꿔 주세요.
export const profile = {
  name: "김택수",
  bio: "AI를 품은 수학교사 | 요즘에는 AI와 함께 지내요.",
  imageUrl:
    "https://i.namu.wiki/i/StItTDRs3CMezgPU8s5C-yuE0k0bMzxw5wo1S_L65FM6x5YZrNFlxP7qqjnnUv8AZx_9s6MREgoUMX0NFBaXYZd9f5u5YP6LPDXklNTdKocQ5f5HlY17xUzwiOejMvU_ThmAibU87-bQjB3xXhBtFg.webp",
};

export const links: ProfileLink[] = [
  { id: "instagram", title: "인스타그램", url: "https://example.com/instagram" },
  { id: "youtube", title: "유튜브", url: "https://example.com/youtube" },
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
];
