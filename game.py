from typing import Optional
from scene import Scene, SceneType


class Display:
    @staticmethod
    def show_scene(scene: Scene):
        print(scene.intro)
        if scene.actions:
            print("What do you do?")
            print(
                "Options:\n -", "\n - ".join([action.name for action in scene.actions])
            )

    @staticmethod
    def show_message(message: str):
        print(message)


class Game:
    def __init__(self, name: str, scenes: list[Scene]):
        self.name = name
        self.scenes = {scene.name: scene for scene in scenes}
        self.state = {}

    def _check_requirements(self, scene: Scene):
        for key, value in scene.requirements.items():
            if self.state.get(key) != value:
                raise ValueError(f"Requirement not met: {key}")

    def play_scene(self, scene: Scene) -> Optional[Scene]:
        try:
            self._check_requirements(scene)
        except ValueError as e:
            Display.show_message(str(e))
            return None

        if scene.type == SceneType.GAME_OVER:
            Display.show_scene(scene)
            return None

        while True:
            try:
                Display.show_scene(scene)
                input_ = input("> ").strip()
                outcome = scene.parse_action(input_, scene.actions)
                Display.show_message(outcome.message)
                return self.scenes.get(outcome.next_scene)
            except ValueError as e:
                Display.show_message(f"Invalid choice: {e}. Try again!")

    def start(self):
        current_scene = next(
            (
                scene
                for scene in self.scenes.values()
                if scene.type == SceneType.OPENING
            ),
            None,
        )
        if not current_scene:
            raise ValueError(f"{SceneType.OPENING} scene not found!")

        while current_scene:
            current_scene = self.play_scene(current_scene)
