import Button from "@/components/commons/Button";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#171D22] text-white">
      <section
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Discover Your Next Favorite{" "}
            <span className="text-[#E2D609]">Movie</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.
          </p>
          <Button
            title="Browse Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
          />
        </div>
      </section>

      <section className="py-16 px-8 md:px-44 bg-[#121018] text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Join CineSeek Now!
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          Sign up today to get access to the latest movies, exclusive content,
          and personalized movie recommendations.
        </p>
        <Button title="Get Started" />
      </section>
    </div>
  );
};

export default Home;
