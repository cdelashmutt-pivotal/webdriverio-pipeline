const proxyHost = process.env.PROXY_HOST;
const proxyPort = process.env.PROXY_PORT;
const proxyUser = process.env.PROXY_USER;
const proxyPassword = process.env.PROXY_PASSWORD;
const defaultTimeoutInterval = process.env.JASMINE_TIMEOUT || 10000;

const capabilities = [{
    maxInstances: 5,

    browserName: 'chrome',
    chromeOptions: {
        binary: '/usr/bin/chromium-browser',
        args: [
            'headless',
            'disable-gpu',
            'no-sandbox',
        ],
    },
}];
const seleniumInstallArgs = {};
if (proxyHost) {
    capabilities[0].chromeOptions.args.push('proxy-server=localhost:18080');
    seleniumInstallArgs.proxy = `http://${proxyUser}:${proxyPassword}@${proxyHost}:${proxyPort}`;
}

exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities,
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    seleniumArgs: {
        javaArgs: [
            '-Dwebdriver.chrome.driver=/usr/bin/chromedriver',
        ],
    },
    seleniumInstallArgs,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        defaultTimeoutInterval,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    }
}
