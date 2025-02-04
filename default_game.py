# Example scenes
from textwrap import dedent
from game import Game
from scene import Action, Outcome, Scene, SceneType


def guess_code_parser(input_: str, actions: list[Action]) -> Outcome:
    correct_code = "123"
    if input_ == correct_code:
        return next(action.outcome for action in actions if action.name == "guess code")
    raise ValueError("Wrong code!")


def create_scenes():
    scenes = [
        Scene(
            type=SceneType.OPENING,
            name="Central Corridor",
            intro=dedent("""
                The Gothons of Planet Percal #25 have invaded your ship and
                destroyed your entire crew. You are the last surviving
                member and your last mission is to get the neutron destruct
                bomb from the Weapons Armory, put it in the bridge, and
                blow the ship up after getting into an escape pod.

                You're running down the Central Corridor to the Weapons
                Armory when a Gothon jumps out, red scaly skin, dark grimy
                teeth, and evil clown costume flowing around his hate
                filled body. He's blocking the door to the Armory and
                """),
            actions=[
                Action(
                    name="shoot!",
                    outcome=Outcome(
                        message="""Quick on the draw you yank out your blaster and fire at the Gothon...You died.""",
                        next_scene="Death",
                    ),
                ),
                Action(
                    name="dodge!",
                    outcome=Outcome(
                        message="""Like a world-class boxer, you dodge...You died.""",
                        next_scene="Death",
                    ),
                ),
                Action(
                    name="tell a joke",
                    outcome=Outcome(
                        message="""You tell a Gothon joke...You survive and move on.""",
                        next_scene="Laser Weapon Armory",
                    ),
                ),
            ],
        ),
        Scene(
            name="Laser Weapon Armory",
            intro=dedent("""
                You do a dive roll into the Weapon Armory... There's a keypad lock on the box...
            """),
            actions=[
                Action(
                    name="guess code",
                    outcome=Outcome(
                        message="""The container clicks open...You proceed.""",
                        next_scene="The Bridge",
                    ),
                ),
            ],
            parse_action=guess_code_parser,
        ),
        Scene(
            name="The Bridge",
            intro=dedent("""
                You burst into the Bridge with the neutron destruct bomb...
            """),
            actions=[
                Action(
                    name="throw the bomb",
                    outcome=Outcome(
                        message="""You panicked and threw the bomb...You died.""",
                        next_scene="Death",
                    ),
                ),
                Action(
                    name="slowly place the bomb",
                    outcome=Outcome(
                        message="""You carefully placed the bomb and ran to the escape pod...""",
                        next_scene="Escape Pod",
                    ),
                ),
            ],
        ),
        Scene(
            name="Escape Pod",
            intro=dedent("""
                You rush through the ship to the escape pods...
            """),
            actions=[
                Action(
                    name="5",
                    outcome=Outcome(
                        message="""You escape safely. You won!""",
                        next_scene="Finished",
                    ),
                ),
                Action(
                    name="1",
                    outcome=Outcome(
                        message="""The pod malfunctions...You died.""",
                        next_scene="Death",
                    ),
                ),
            ],
        ),
        Scene(
            name="Death",
            # intro="You died. Try again next time!",
            intro="You died. You kinda suck at this.",
            type=SceneType.GAME_OVER,
        ),
        Scene(
            name="Finished",
            intro="You won! Congratulations!",
            type=SceneType.GAME_OVER,
        ),
    ]

    return scenes


# Start the game
if __name__ == "__main__":
    game = Game("Gothon Escape", create_scenes())
    game.start()
