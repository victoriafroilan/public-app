import Head from 'next/head';
import NavMain from '../components/nav-main';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Page - {process.env.appName}</title>
      </Head>

      <NavMain brandTitle={process.env.appShortName} />

      <Footer />

      <main
        className="flex flex-col flex-1 bg-center bg-cover bg-origin-border"
        style={{
          backgroundImage:
            'url(https://vms-s3-ph-vms-static.imgix.net/images/bg-mountain-fields-trees.jpg?auto=format&h=720)',
        }}
      >
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing <code className="">pages/index.js</code>
        </p>

        <div className="">
          <a
            href="https://nextjs.org/docs"
            className="text-red-600 hover:text-red-400"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className=""
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <div className="">
          <a
            href="https://nextjs.org/docs"
            className="text-red-600 hover:text-red-400 dark:text-white"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className=""
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <div className="">
          <a
            href="https://nextjs.org/docs"
            className="text-red-600 hover:text-red-400"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className=""
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <div className="">
          <a
            href="https://nextjs.org/docs"
            className="text-red-600 hover:text-red-400"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className=""
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <div>
        <div className="bg-slate-500">
          <h1 className="">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="">
            Get started by editing <code className="">pages/index.js</code>
          </p>

          <div className="">
            <a
              href="https://nextjs.org/docs"
              className="text-red-600 hover:text-red-400"
            >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-cyan-500">
          <h1 className="">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="">
            Get started by editing <code className="">pages/index.js</code>
          </p>

          <div className="">
            <a
              href="https://nextjs.org/docs"
              className="text-red-600 hover:text-red-400"
            >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
