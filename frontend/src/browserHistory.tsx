import { createBrowserHistory } from "history";

// initialize history object for the application
const history = createBrowserHistory({ basename: "/" });

/**
 * Use state object to avoid scroll to top like
 * history.push(URL, {scrollToTop: false});
 */

// scroll to top when route changes
history.listen((routeHistory): void => {
  (routeHistory?.state as any)?.scrollToTop !== false && window.scrollTo(0, 0);
});

export default history;
