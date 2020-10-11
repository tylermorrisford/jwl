import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About JWL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3 className="title">
          About JWL 
        </h3>
        <h5 className="description">
          established 2017 &#9650; jacqueline landry, principal
        </h5>


        <div className="grid">
          <div className="card">
            <h3>Our Principal &rarr;</h3>
            <p>A highly experienced Operations Manager who has demonstrated the ability to lead diverse teams domestically and abroad. Strong technical, organizational, and operational qualifications with a track record of more than 10 years of hands-on experience in strategic planning, project management, budget administration and revenue generation, large-scale contract negotiations, and data systems administration.</p>
          </div>
        </div>
          <div>
            <a className="links" href="https://www.linkedin.com/in/jacqueline-landry-0457504/">LinkedIn</a>
            {" "}<a className="links" href="mailto:jackielandry@gmail.com">Contact</a>
            {" "}<span className="links"><Link href="/"><a>Home</a></Link></span>
          </div>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} JWL Strategies
      </footer>

      <style jsx>{`
        .container {
          font-family: Helvetica;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(255, 0, 89, 1);
          background: -webkit-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
          background: -moz-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
          background: -ms-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
          background: -o-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
          background: linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
          background-size: 400% 400%;
          -webkit-animation: gradientBg 30s linear infinite;
          -moz-animation: gradientBg 30s linear infinite;
          animation: gradientBg 30s linear infinite;
        }


        @-webkit-keyframes gradientBg {
          0% {
              background-position: 100% 0%
          }
          100% {
              background-position: 15% 100%
          }
      }
      
      @-moz-keyframes gradientBg {
          0% {
              background-position: 100% 0%
          }
          100% {
              background-position: 15% 100%
          }
      }
      
      @keyframes gradientBg {
          0% {
              background-position: 100% 0%
          }
          100% {
              background-position: 15% 100%
          }
      }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .links, Link {
          padding: 20px 20px 0;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;

        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          letter-spacing: 3px;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1000px;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        // .card:hover,
        // .card:focus,
        // .card:active {
        //   color: #0070f3;
        //   border-color: #0070f3;
        // }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
