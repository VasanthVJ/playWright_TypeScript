import { chromium, firefox, webkit } from 'playwright';

export default class BrowserLauncher{

    public async launchBrowsers() {
        const browserType = chromium; // Or firefox or webkit
        const browser = await browserType.launch({
          headless: false,
          channel: 'chrome',
           // Set to true for headless mode (no browser window)
          // Other options (optional):
          slowMo: 50, // Slow down execution by 50ms for debugging
          devtools: true, // Launch with DevTools opened
        });
        return browser;
      }


}