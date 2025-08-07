'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCog, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <h1>Font Awesome v7 Test</h1>

      <h2>Standard Icons</h2>
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faCoffee} />

      <h2>Styled Icons</h2>
      <FontAwesomeIcon icon={faCog} size="2x" />
      <FontAwesomeIcon icon={faUser} color="blue" />

      <h2>Testing Deprecated Props (Assumed)</h2>
      <p>
        The following icons test props that are assumed to be deprecated in v7.
        The `spin` and `border` props might not work as expected.
      </p>
      <div>
        Spin: <FontAwesomeIcon icon={faSpinner} spin /> (may not work)
      </div>
      <div>
        Border: <FontAwesomeIcon icon={faUser} border /> (may not work)
      </div>

      <h2>Manual Animation</h2>
      <p>If `spin` is deprecated, you can use CSS for animations.</p>
      <style jsx>{`
        @keyframes fa-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .fa-spin-custom {
          animation: fa-spin 2s infinite linear;
        }
      `}</style>
      <div>
        Custom Spin: <FontAwesomeIcon icon={faSpinner} className="fa-spin-custom" />
      </div>
    </div>
  );
}
