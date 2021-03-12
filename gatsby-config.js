module.exports = {
  pathPrefix: '/Charging',
  siteMetadata: {
    title: `QDS`,
    author: {
      name: `汇哥全球后援会`,
      summary: `gggggggggggis.....`,
    },
    description: `记录自己的学习过程`,
    siteUrl: `https://qian4321.github.io/Charging/`,
    social: {
      twitter: `kylemathews`,
    },
  },
	siteMetadata: {
		siteUrl: `http://www.qds.ink`,
	},
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'lucario'
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `王霸之气`,
        short_name: `QH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `var(--color-1)`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    // Add after these plugins if used
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/src/templates/tags/index.jsx`,
      },
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				// Exclude specific pages or groups of pages using glob parameters
				// See: https://github.com/isaacs/minimatch
				// The example below will exclude the single `path/to/page` and all routes beginning with `category`
				exclude: [`/category/*`, `/path/to/page`],
				query: `
					{
						wp {
							generalSettings {
								siteUrl
							}
						}
	
						allSitePage {
							nodes {
								path
							}
						}
				}`,
				resolveSiteUrl: ({site, allSitePage}) => {
					//Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
					return site.wp.generalSettings.siteUrl
				},
				serialize: ({ site, allSitePage }) =>
					allSitePage.nodes.map(node => {
						return {
							url: `${site.wp.generalSettings.siteUrl}${node.path}`,
							changefreq: `daily`,
							priority: 0.7,
						}
					})
			}
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
