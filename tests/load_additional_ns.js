define(['i18n'], function(plugin) {
    var translation = {
        test: 'hello'
    };
    var namespace1 = {
        test: 'hello1'
    };
    require(['i18n!:namespace1'], function(i18n) {
        test('resources', function() {
            deepEqual(plugin.getResources('en', 'translation'), translation);
            deepEqual(plugin.getResources('en', 'namespace1'), namespace1);
        });
        test('namespaces', function() {
            deepEqual(i18n.options.ns, {
                defaultNs: 'translation',
                namespaces: ['translation', 'namespace1']
            });
        });
        test('translate', function() {
            strictEqual(i18n.t('test'), translation.test);
            strictEqual(i18n.t('namespace1:test'), namespace1.test);
        });
        start();
    });
});
