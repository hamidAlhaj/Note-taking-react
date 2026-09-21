// registerServiceWorker.tsx

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  ),
);

export default function register() {
  // استخدام import.meta.env بدلاً من process.env (خاص بـ Vite)
  if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service worker.",
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl: string) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        // ✅ فحص null قبل استخدامه
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log("New content is available; please refresh.");
              } else {
                console.log("Content is cached for offline use.");
              }
            }
          };
        }
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl: string) {
  fetch(swUrl)
    .then((response) => {
      // ✅ استخدام optional chaining للتحقق من null
      const contentType = response.headers?.get("content-type");
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
