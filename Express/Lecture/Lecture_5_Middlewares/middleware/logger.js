const logging = (req,res, next)=>{
    console.log(`${req.method} ${req.protocol}${'://'}${req.headers.host}${req.url}`);
    // console.log(`BaseUrl : ${req.baseUrl}`);
    // console.log(`Endpoint/Path : ${req.url}`);
    // console.log(`Protocol: ${req.protocol}`);
    // console.log(`Hostname: ${req.hostname}`);
    // console.log(`OriginalUrl : ${req.originalUrl}`);
    // console.log(`Host and port number: ${JSON.stringify(req.headers.host)}`);
    // console.log(`Host and port number: ${req.headers.host}`);
    // console.log(`Headers: ${JSON.stringify(req.headers, null, 2)}`);
    // console.log(`Body: ${JSON.stringify(req.body, null, 2)}`);
    // console.log(`IP Address: ${req.ip}`);
    // console.log(`Query Parameters: ${JSON.stringify(req.query, null, 2)}`);
    // console.log(`Route Parameters: ${JSON.stringify(req.params, null, 2)}`);
    // console.log(`Cookies: ${JSON.stringify(req.cookies, null, 2)}`);
    // console.log(`Signed Cookies: ${JSON.stringify(req.signedCookies, null, 2)}`);
    // console.log(`Subdomains: ${req.subdomains}`);
    // console.log(`Secure: ${req.secure}`);
    // console.log(`XHR Request: ${req.xhr}`);
    // console.log(`Fresh: ${req.fresh}`);
    // console.log(`Stale: ${req.stale}`);
    // console.log(`App: ${req.app}`);
    // console.log(`Route: ${JSON.stringify(req.route, null, 2)}`);

    // not working.....
    // console.log(`req get field: ${req.get(field)}`);
    // console.log(`req accepts(types): ${req.accepts(types)}`);
    // console.log(`req is(type): ${req.is(type)}`);

    // console.log(`status code : ${res.statusCode}`);

    // not working......
    // console.log(`setHeader : ${res.setHeader(name, value)}`);
    // console.log(`getHeader : ${res.getHeader(name)}`);
    // console.log(`res body : ${res.send(body)}`);
    // console.log(`res object : ${res.json(obj)}`);
    // console.log(`res end : ${res.end()}`);
    // console.log(`res status code  : ${res.status(code)}`);

    next();
}

export default logging;

// In the middleware function, you have access to various properties of the req (request) and res (response) objects, as well as the next function. Here's a summary of what you can access:

// Request (req) Object:
// req.method: The HTTP method (GET, POST, etc.).
// req.url: The URL of the request.
// req.headers: The request headers.
// req.params: The route parameters (e.g., for /user/:id, req.params.id).
// req.query: The query string parameters (e.g., for ?name=John, req.query.name).
// req.body: The body of the request (e.g., in POST requests, if parsed by middleware like body-parser).
// req.cookies: The cookies sent by the client (if middleware like cookie-parser is used).
// req.ip: The IP address of the client.
// req.protocol: The protocol used (e.g., HTTP or HTTPS).
// req.originalUrl: The original request URL.
// req.baseUrl: The base URL path on which the current router is mounted.
// req.path: The path part of the request URL.

// Response (res) Object:
// res.statusCode: The HTTP status code of the response.
// res.setHeader(name, value): Set a response header.
// res.getHeader(name): Get a response header.
// res.send(body): Send a response with the specified body.
// res.json(obj): Send a JSON response.
// res.end(): End the response process.
// res.status(code): Set the HTTP status code.