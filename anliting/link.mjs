import rollup from 'rollup'
let
    skip=[
        '/lib/core.static.js',
        'https://gitcdn.link/cdn/anliting/simple.js/3b5e122ded93bb9a5a7d5099ac645f1e1614a89b/src/simple.static.js',
    ]
async function link(input,file){
    let bundle=await rollup.rollup({
        input,
        external:s=>skip.includes(s),
    })
    await bundle.write({
        file,
        format:'es',
        paths:s=>skip.includes(s)&&s,
    })
}
link(`files/edituser.js`,`files/edituser.static.js`)
link(`files/settings.js`,`files/settings.static.js`)
link(`files/user.js`,`files/user.static.js`)
