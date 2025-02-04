from default_game import DEFAULT_SCENE
from engine import Engine
from game import Game
# from scenes import (
#     CentralCorridor,
#     Death,
#     EscapePod,
#     Finished,
#     LaserWeaponArmory,
#     TheBridge,
# )


# a_map = Map(
#     scenes=[
#         CentralCorridor("Central Corridor"),
#         LaserWeaponArmory("Laser weapon Armory"),
#         TheBridge("The Bridge"),
#         EscapePod("Escape Pod"),
#         Death("Death"),
#         Finished("Finished"),
#     ],
#     start_scene="Central Corridor",
# )

# a_game = Engine(a_map)
# a_game.play()

a_engine = Engine(game=Game(name="Gothons of Planet Percal #25", scenes=DEFAULT_SCENE))
a_engine.start()
