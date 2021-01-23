import * as $ from 'jquery';

function createAnalytics(): object {
    let counter = 0;
    let isDestroyed: boolean = false;

    const listener = () => counter++
    $(document).on('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            return isDestroyed ? 'Analytics is destroyed' : `Clicks ${counter}`
        }
    }
}

window['analytics'] = createAnalytics();