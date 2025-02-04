from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Callable


class SceneType(Enum):
    OPENING = "Opening"
    NORMAL = "Normal"
    GAME_OVER = "Game Over"


@dataclass
class Outcome:
    message: str
    next_scene: str


@dataclass
class Action:
    name: str
    outcome: Outcome


def _default_parse_choice(input_: str, actions: list[Action]) -> Outcome:
    for action in actions:
        if input_ == action.name:
            return action.outcome
    raise ValueError("Invalid choice")


@dataclass
class Scene:
    name: str
    intro: str
    actions: list[Action] | None = None
    type: SceneType = SceneType.NORMAL
    parse_action: Callable[[str, list[Action]], Outcome] = _default_parse_choice
    requirements: dict[str, Any] = field(default_factory=dict)


# class Death(Scene):
#     quips = [
#         "You died. You kinda suck at this.",
#         "Your Mom will be proud...if she were smarter.",
#         "Such a luser.",
#         "I have a small puppy that's better at this."
#         "You're worse than your Dad's jokes.",
#     ]

#     def enter(self):
#         print(Death.quips[randint(0, len(self.quips) - 1)])
#         exit(1)
