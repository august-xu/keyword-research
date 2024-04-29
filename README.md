This is a small plugin for keyword research with a better flow

## General process of keyword research:

1. Check Google Trends to see the search volume of this keyword within a year, and determine whether to proceed to the next step.
2. Visit aherf.com to check the keyword difficulty and determine whether to proceed with step three.
3. Identify the websites with high rankings for that keyword and then check the history of these websites on archive.com.

After the above steps have been carried out, we can then use SEO tools such as Semrush and Ahrefs to conduct a detailed analysis of the keyword,So I developed this plugin, which uses the method of selecting text and opening related websites directly through the right-click menu to streamline the process of SEO keyword research.

## For Developer

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
