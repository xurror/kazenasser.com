from game import Game


class Engine:
    current_scene: str

    def __init__(self, game: Game):
        self.game = game
        self.current_scene = 0

    def start(self):
        next_scene = self.game.play_scene(scene=self.game.opening_scene())

        while next_scene:
            next_scene = self.game.play_scene(next_scene)
