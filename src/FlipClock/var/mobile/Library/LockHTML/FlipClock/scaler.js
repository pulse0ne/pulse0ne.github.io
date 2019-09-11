(function (w, d) {
    if (w.scale !== undefined) {
        const s = Math.abs(w.scale / 10);
        d.querySelector('meta[name=viewport]').setAttribute('content', `width=device-width, initial-scale=${s}, maximum-scale=${s}, user-scalable=0`);
    }
})(window, document);