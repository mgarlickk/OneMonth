from flask import Flask, render_template
import yt_search
app = Flask(__name__)


@app.route('/')
def testing():
    
    return yt_search.main()
