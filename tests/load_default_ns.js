define(['qunit', 'i18n'], function(qunit, plugin) {
    require(['i18n!../tests'], function(i18n) {
        
        var translations = {
            test: 'hello'
        };
        
        qunit.test('resources', function(assert) {
            assert.deepEqual(plugin.getResources('dev', 'translation'), translations, 'translation');
        });
        
        qunit.test('namespaces', function(assert) {
            assert.deepEqual(i18n.options.ns, {
                defaultNs: 'translation',
                namespaces: ['translation']
            }, 'translation');
        });
        
        qunit.test('translate', function(assert) {
            assert.strictEqual(i18n.t('test'), 'hello', "i18n.t('test')");
        });
        
        qunit.load();
        qunit.start();
    });
});
