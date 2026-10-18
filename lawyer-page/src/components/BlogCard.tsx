import Link from "next/link";
import type { Post } from "@/lib/posts";
import { POSTS } from "@/lib/posts";
import { ROUTES } from "@/lib/site";
import s from "./BlogCard.module.css";

export function BlogCard({ post, className = "", style }: { post: Post; className?: string; style?: React.CSSProperties }) {
  return (
    <Link href={`${ROUTES.blog}${post.slug}/`} className={`${s.card} ${className}`} style={style}>
      <div className={s.text}>
        <h3 className="t-h3">{post.title}</h3>
        <p className={`t-body3 ${s.excerpt}`}>{post.excerpt}</p>
      </div>
      <img className={s.img} src={post.image} alt="" />
      <p className={s.date}>{post.date}</p>
    </Link>
  );
}

/** «Читайте также» — карусель карточек, уходящая за правый край. */
export function ReadAlso({ title = "Читайте также", posts }: { title?: string; posts?: Post[] }) {
  const list = posts ?? [...POSTS, POSTS[2]];
  return (
    <section className={s.section}>
      <h2 className="t-h2">{title}</h2>
      <div className={`${s.track} no-scrollbar`}>
        {list.map((p, i) => (
          <BlogCard post={p} key={p.slug + i} />
        ))}
      </div>
    </section>
  );
}
