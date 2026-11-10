export type ProfileLink = {
  id: string;
  title: string;
  url: string;
};

// 사진과 링크는 임시 값입니다. 실제 값으로 바꿔 주세요.
export const profile = {
  name: "김택수",
  bio: "충남교육청 논산 연무중학교 수학교사 김택수",
  imageUrl: "/profile-placeholder.svg",
};

export const links: ProfileLink[] = [
  { id: "instagram", title: "인스타그램", url: "https://example.com/instagram" },
  { id: "youtube", title: "유튜브", url: "https://example.com/youtube" },
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
];
