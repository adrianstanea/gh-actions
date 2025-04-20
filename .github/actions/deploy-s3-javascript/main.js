const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("child_process");

function run() {
    // TODO:
    //  1. Get input values
    const bucket = core.getInput("bucket", { required: true, trimWhitespace: true });
    const bucketRegion = core.getInput("bucket-region", { required: true, trimWhitespace: true });
    const distFolder = core.getInput("dist-folder", { required: true, trimWhitespace: true });

    //  2. Upload files to S3
    const s3URI = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3URI} --region ${bucketRegion}`);

}

run();
