import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const onClick = (id: string | number, title: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: IMovieProps) => (
        <div
          onClick={() => onClick(movie?.id, movie?.original_title)}
          className="movie"
          key={movie?.id}
        >
          <Image
            className="imgs"
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.original_title}
            width={128}
            height={192}
          />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie?.id}`,
                query: { title: movie?.original_title },
              }}
              as={`/movies/${movie?.id}`}
              legacyBehavior
            >
              <a>{movie?.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}

      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          width: 100% !important;
          height: auto !important;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// getServerSideProps에서의 코드는 server에서만 돌아감
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
