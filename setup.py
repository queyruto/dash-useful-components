import json
import os
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

with open("README.md", "r") as fh:
    long_description = fh.read()

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package.get('description', package_name),
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/queyruto/dash-useful-components",
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],    
)
