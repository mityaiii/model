function calculate() {
    const m = (parseFloat(document.getElementById("q-input").value) || 1)* 10**(-31);
    const q = parseFloat(document.getElementById("q-input").value) * 10**(-19);
    const v =  parseFloat(document.getElementById("v-input").value) || 0;
    const b = parseFloat(document.getElementById("b-input").value) || 0;
    const alpha =  (parseFloat(document.getElementById("alpha-input").value || 90)) * Math.PI / 180;
    
    let vZ = (v * Math.cos(alpha)).toFixed(6);

    if (q < 0) {
      vZ *= -1;
    }

    const w = b * q / m;
    
    var pointCount = 100;

    var x = [];
    var y = [];
    var z = [];
    var c = [];

    const r = m * v * Math.sin(alpha) / b / q;
    for(let i = 0; i < pointCount; i+=0.2) 
    {
      const phi = w * i;
       x.push(r * Math.cos(phi));
       y.push(r * Math.sin(phi));
       z.push(vZ * i);
       c.push(i)
    }

    Plotly.newPlot('myDiv', [{
      type: 'scatter3d',
      mode: 'lines+markers',
      x: x,
      y: y,
      z: z,
      line: {
        width: 6,
        color: c,
        colorscale: "Viridis"},
      marker: {
        size: 3.5,
        color: c,
        colorscale: "Greens",
        cmin: -20,
        cmax: 50
      }},                  
    ]);
}
