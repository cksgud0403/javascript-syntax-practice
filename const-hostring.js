const x = 'outer scope';
function a() {
    console.log(x);
    const x = 'inner scope';
}