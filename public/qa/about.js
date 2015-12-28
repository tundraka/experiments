suite('About Page', function() {
    test('page contains a link to about', function() {
        assert($('a[href="/contact"]').length);
    });
});
