import 'mocha';
import * as CT from "#customary-testing";

const suite = {
    title: 'customaryjs.github.io',
    subject_html: 'index.html'
};

describe(suite.title, async function (){
    this.timeout(4000);
    this.slow(500);

    let window: Window;

    before(() => window = CT.open(suite.subject_html));
    after(() => window.close());

    describe('happy day', async function () {
        it('looks good', async function () {
            this.retries(128);
            const view_source = CT.querySelector('view-source', window);
            CT.spot('Hello Customary!', view_source, {selectors: 'code'});
        });
    });
});
