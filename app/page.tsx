'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setdaysSpan] = useState<string | number>();
  const [hours, sethoursSpan] = useState<string | number>();

  function getTimeRemaining(endtime: Date) {
    const total = endtime.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(endtime: Date) {
    function updateClock() {
      const t = getTimeRemaining(endtime);

      setdaysSpan(t.days);
      sethoursSpan(('0' + t.hours).slice(-2));
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  useEffect(() => {
    const deadline = new Date(new Date().getFullYear(), 11);
		initializeClock(deadline);
  }, [])

  return (
    <div id="body-wrap">
      <div className="row">
        <div className="col-8">
          <div className="container">

            <header id="header">
              <h1>Inffluapp</h1>
            </header>

            <div className="main-content">

              <div className="page-title">

                <h2>Estamos por lanzar en Diciembre!</h2>

                <div id="countdown-clock">
                  <div className="time">
                    <span className="days">{days}</span>
                    <small>Days</small>
                  </div>
                  <div className="time">
                    <span className="hours">{hours}</span>
                    <small>Hours</small>
                  </div>
                </div>

              </div>

              <p>Espera nuestra aplicación en EUA y Latinoamérica. Búscanos en Apple Store y Google Play Store</p>

              <div className="social-links">
                <ul>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/inffluapp">
                      <img height="30px" src="/images/instagram.png" />
                    </a>
                  </li>
                  <li>
                    <img height="30px" src="/images/apple-store.png" />
                  </li>
                  <li>
                    <img height="30px" src="/images/google-playstore.png" />
                  </li>
                </ul>
              </div>

              <ul style={{padding: 0}}>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms" style={{color: '#0043ee'}}>
                    Términos y condiciones
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/privacy" style={{color: '#0043ee'}}>
                    Politicas de privacidad
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/support" style={{color: '#0043ee'}}>
                    Soporte
                  </Link>
                </li>
                <li style={{marginBottom: 3}}>
                  <Link href="/terms/delete-account" style={{color: '#0043ee'}}>
                    Eliminar cuenta
                  </Link>
                </li>
              </ul>

            </div>

            <footer id="footer">

              <div className="copyright">
                <p>Copyright &copy; <a href="#" target="_blank">Inffluapp</a> 2024. <a
                    href="https://www.instagram.com/inffluapp" target="_blank" style={{color: '#0043ee'}}> <b> <br /> <u>
                        Visita instagram.com/inffluapp
                      </u></b> </a></p>

              </div>

            </footer>

          </div>
        </div>

        <div className="col-4">
          <img src="/images/sideimg.png" alt="wallpaper" className="sideimg" />
        </div>
      </div>

    </div>
  );
}
