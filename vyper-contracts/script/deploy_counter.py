from src import Counter
from moccasin.boa_tools import VyperContract

def deploy_counter() -> VyperContract:
    counter: VyperContract = Counter.deploy()
    return counter

def moccasin_main() -> VyperContract:
    return deploy_counter()
