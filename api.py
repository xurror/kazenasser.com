from flask import Flask, jsonify, request, session
from flask_session import Session
from flask_cors import CORS

from auth import AuthError, requires_auth, requires_scope

from api_engine import GameApi
from default_game import create_scenes

app = Flask(__name__)
CORS(app)
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

game = GameApi("Gothon Escape", create_scenes())


@app.before_request
def ensure_session():
    print("Ensure a Session")
    if "game_state" not in session:
        print("Game not in session Session")
        session["game_state"] = game.initialize_state()


# @cross_origin(origins="*")
@app.route("/scene", methods=["GET"])
def get_scene():
    user_state = session.get("game_state", {})
    return jsonify(game.get_current_scene(user_state))


# @cross_origin(origins="*")
@app.route("/action", methods=["POST"])
def perform_action():
    data = request.json
    action = data.get("action")
    if not action:
        return jsonify({"error": "Action not provided."}), 400

    user_state = session.get("game_state", {})
    result = game.play_scene(user_state, action)
    session["game_state"] = user_state
    return jsonify(result)


# @app.route("/scene", methods=["GET"])
# def get_scene():
#     return jsonify(game.get_current_scene())


# @app.route("/action", methods=["POST"])
# def perform_action():
#     data = request.json
#     action = data.get("action")
#     if not action:
#         return jsonify({"error": "Action not provided."}), 400

#     result = game.play_scene(action)
#     return jsonify(result)


# Controllers API


# This doesn't need authentication
@app.route("/api/public")
# @cross_origin(headers=["Content-Type", "Authorization"])
def public():
    response = (
        "Hello from a public endpoint! You don't need to be authenticated to see this."
    )
    return jsonify(message=response)


# This needs authentication
@app.route("/api/private")
# @cross_origin(headers=["Content-Type", "Authorization"])
@requires_auth
def private():
    response = (
        "Hello from a private endpoint! You need to be authenticated to see this."
    )
    return jsonify(message=response)


# This needs authorization
@app.route("/api/private-scoped")
# @cross_origin(headers=["Content-Type", "Authorization"])
@requires_auth
def private_scoped():
    if requires_scope("read:messages"):
        response = "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this."
        return jsonify(message=response)
    raise AuthError(
        {
            "code": "Unauthorized",
            "description": "You don't have access to this resource",
        },
        403,
    )


if __name__ == "__main__":
    app.run(debug=True, port=5001)
