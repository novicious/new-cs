import DarkVeil from './DarkVeil';
import DecryptedText from './DecryptedText';
import './index.css';

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      minHeight: '100dvh', 
      position: 'relative', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Animation */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1 
      }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Foreground Content */}
      <div style={{ 
        zIndex: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '3rem',
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        position: 'relative'
      }}>
        {/* SEO Main Title (Visually Hidden) */}
        <h1 style={{ 
          position: 'absolute', 
          width: '1px', 
          height: '1px', 
          padding: 0, 
          margin: '-1px', 
          overflow: 'hidden', 
          clip: 'rect(0, 0, 0, 0)', 
          whiteSpace: 'nowrap', 
          border: 0 
        }}>
          Asteryx - Transformamos segurança cibernética em proteção jurídica efetiva.
        </h1>

        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
          <img 
            src="/logo.svg" 
            alt="Asteryx Logo" 
            width="350"
            height="78"
            fetchPriority="high"
            loading="eager"
            style={{ 
              maxWidth: '350px', 
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 0px 30px rgba(2, 194, 110, 0.4))',
              display: 'block'
            }} 
          />
          <span style={{
            position: 'absolute',
            bottom: '10%', /* Lowered to base of X */
            right: '-4%',  /* Pushed out to clear the letter */
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1rem',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            userSelect: 'none'
          }}>
            ®
          </span>
        </div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.1rem',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
          textAlign: 'center',
          maxWidth: '500px',
          fontWeight: 300,
          textShadow: '0 0 10px rgba(0,0,0,0.5)'
        }}>
          <DecryptedText
            text="Transformamos segurança cibernética em proteção jurídica efetiva."
            animateOn="view"
            revealDirection="center"
            sequential={true}
            speed={40}
            maxIterations={20}
          />
        </div>

        {/* Social Links Fixed just below the centered content */}
        <div style={{ 
          position: 'absolute', 
          bottom: '-3rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex', 
          justifyContent: 'center',
          zIndex: 20
        }}>
          <a 
            href="https://linkedin.com/company/asteryx-team" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn da Asteryx"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
