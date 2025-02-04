from scene import Scene, SceneType


class GameApi:
    def __init__(self, name: str, scenes: list[Scene]):
        self.name = name
        self.scenes = {scene.name: scene for scene in scenes}

    def initialize_state(self):
        return {
            "state": {},
            "current_scene": next(
                (
                    scene.name
                    for scene in self.scenes.values()
                    if scene.type == SceneType.OPENING
                ),
                None,
            ),
            "history": [],  # Track the history of scenes and choices
        }

    def _check_requirements(self, scene: Scene, state: dict):
        for key, value in scene.requirements.items():
            if state.get(key) != value:
                raise ValueError(f"Requirement not met: {key}")

    def play_scene(self, user_state: dict, input_: str) -> dict:
        current_scene_name = user_state.get("current_scene")
        current_scene = self.scenes.get(current_scene_name)

        if not current_scene:
            return {"error": "Current scene not found."}

        try:
            self._check_requirements(current_scene, user_state.get("state", {}))
        except ValueError as e:
            return {"error": str(e)}

        if current_scene.type == SceneType.GAME_OVER:
            return {"message": current_scene.intro, "game_over": True}

        try:
            outcome = current_scene.parse_action(input_, current_scene.actions)
            user_state["current_scene"] = outcome.next_scene
            # Record the history
            user_state["history"].append(
                {
                    "scene": current_scene.name,
                    "choice": input_,
                    "message": outcome.message,
                }
            )
            return {"message": outcome.message, "next_scene": outcome.next_scene}
        except ValueError as e:
            return {"error": f"Invalid choice: {str(e)}"}

    def get_current_scene(self, user_state: dict) -> dict:
        current_scene_name = user_state.get("current_scene")
        current_scene = self.scenes.get(current_scene_name)

        if current_scene:
            return {
                "name": current_scene.name,
                "intro": current_scene.intro,
                "actions": [action.name for action in current_scene.actions]
                if current_scene.actions
                else [],
                "type": current_scene.type.value,
                "history": user_state.get("history", []),  # Include history in response
            }
        return {"error": "No current scene available."}


# class GameApi:
#     def __init__(self, name: str, scenes: list[Scene]):
#         self.name = name
#         self.scenes = {scene.name: scene for scene in scenes}
#         self.state = {}
#         self.current_scene = next(
#             (
#                 scene
#                 for scene in self.scenes.values()
#                 if scene.type == SceneType.OPENING
#             ),
#             None,
#         )
#         if not self.current_scene:
#             raise ValueError(f"{SceneType.OPENING} scene not found!")

#     def _check_requirements(self, scene: Scene):
#         for key, value in scene.requirements.items():
#             if self.state.get(key) != value:
#                 raise ValueError(f"Requirement not met: {key}")

#     def play_scene(self, input_: str) -> dict:
#         try:
#             self._check_requirements(self.current_scene)
#         except ValueError as e:
#             return {"error": str(e)}

#         if self.current_scene.type == SceneType.GAME_OVER:
#             return {"message": self.current_scene.intro, "game_over": True}

#         try:
#             outcome = self.current_scene.parse_action(
#                 input_, self.current_scene.actions
#             )
#             self.current_scene = self.scenes.get(outcome.next_scene)
#             return {
#                 "message": outcome.message,
#                 "next_scene": self.current_scene.name if self.current_scene else None,
#             }
#         except ValueError as e:
#             return {"error": f"Invalid choice: {str(e)}"}

#     def get_current_scene(self) -> dict:
#         if self.current_scene:
#             return {
#                 "name": self.current_scene.name,
#                 "intro": self.current_scene.intro,
#                 "actions": [action.name for action in self.current_scene.actions]
#                 if self.current_scene.actions
#                 else [],
#                 "type": self.current_scene.type.value,
#             }
#         return {"error": "No current scene available."}
