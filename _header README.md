# _headers README
#
#

The _headers file in Netlify allows you to customize the HTTP headers that are served with your site. 
#You can configure custom headers for your Netlify site in two ways:
Save a plain text file called _headers to the publish directory of your site.
Add one or more headers tables to your Netlify configuration file.

#Rules
>_headers file should end up in the folder you’re deploying.
>the path/URL lines must begin completely at the start of the line (no preceding spaces)
>header lines must be indented exactly two spaces (not tabs). 
>All header line or lines and their associated path line must occur with no newlines in between them
>In a _headers file, you can specify one or several URL paths with their additional headers indented below them:
	>Any line beginning with # will be ignored as a comment.
	>Header field names are case insensitive.
	>Paths can contain wildcards and placeholders.

	>Here is an example of a _headers file with two URL paths:

		# a path:
		/templates/index.html
  			# headers for that path:
  			X-Frame-Options: DENY
  			X-XSS-Protection: 1; mode=block
		# another path:
			/templates/index2.html
  			# headers for that path:
  			X-Frame-Options: SAMEORIGIN

#Here are some things you could include in the _headers file
#Cache Control: You can specify cache-control headers for assets served in a specific folder or for the entire site2. For example, to specify no caching for assets in the /data/ folder, you could use:
/data/*
  cache-control: max-age=0
  cache-control: no-cache
  cache-control: no-store
  cache-control: must-revalidate

#Security Headers: You can set security headers like X-Frame-Options, X-XSS-Protection, Referrer-Policy, X-Content-Type-Options, and Permissions-Policy3. For example, to set X-Frame-Options and X-XSS-Protection headers for all pages on your site, you could use:
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block

#Content Type: You can specify the Content-Type for specific file types.
