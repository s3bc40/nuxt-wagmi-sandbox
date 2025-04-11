import pytest
from script.deploy_counter import deploy_counter

@pytest.fixture
def counter_contract():
    return deploy_counter()