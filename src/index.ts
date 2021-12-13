import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
    try {
        const token = core.getInput("token", { required: true });

        const context = github.context;
        const octokit = github.getOctokit(token);

        core.debug(`Event: ${context.eventName}`);
        if (!context.eventName.startsWith("pull_request") || !context.eventName.startsWith("issue")) {
            core.error("no u");
            return;
        }

        core.debug(`Commenting on issue ${context.issue.number}`);
        await octokit.rest.issues.createComment({
            ...context.repo,
            issue_number: context.issue.number,
            body: "no u"
        });

        core.debug(`Closing issue ${context.issue.number}`);
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
