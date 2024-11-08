from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/paginaescaneo.html')
def pw():
    return render_template('paginaescaneo.html')


@app.route('/paginagit.html')
def pe():
    return render_template('paginagit.html')

@app.route('/paginajuego.html')
def pg():
    return render_template('paginajuego.html')

@app.route('/paginaredes.html')
def pj():
    return render_template('paginaredes.html')

@app.route('/paginasketchlab.html')
def pr():
    return render_template('paginasketchlab.html')

@app.route('/paginavr.html')
def ps():
    return render_template('paginavr.html')

@app.route('/primerpagina.html')
def pv():
    return render_template('primerpagina.html')

@app.route('/quiensoy.html')
def pp():
    return render_template('quiensoy.html')

if __name__ == '__main__':
    app.run(debug=True)
