import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
    try {
        const token = core.getInput("token", { required: true });

        const context = github.context;
        const octokit = github.getOctokit(token);

        await octokit.rest.issues.createComment({
            ...context.repo,
            issue_number: context.issue.number,
            body: "no u"
        });

        await octokit.rest.issues.update({
            ...context.repo,
            issue_number: context.issue.number,
            state: "closed"
        });

        core.info("no u");
    } catch (error) {
        core.setFailed(`❌ Action failed with error: ${error}`);
    }
}

run();
