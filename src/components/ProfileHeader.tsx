import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({
  name,
  bio,
  imageUrl,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="size-32 rounded-full object-cover ring-4 ring-white shadow-md sm:size-40"
      />
      <h1 className="mt-5 text-2xl font-bold text-stone-900">{name}</h1>
      <p className="mt-2 text-base break-keep text-stone-600">{bio}</p>
    </header>
  );
}
