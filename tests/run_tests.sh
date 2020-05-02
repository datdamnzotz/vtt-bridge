#!/bin/bash

# Arguments to this script will be passed through to `dmv.py`.

set -euo pipefail

if [[ ! -x "$(command -v geckodriver)" ]]; then
    echo 'Error: geckodriver not found' && exit 1
fi

if [[ ! -x "$(command -v chromedriver)" ]]; then
    echo 'Error: chromedriver not found' && exit 1
fi

if [[ ! -d 'venv' ]]; then
    echo 'Creating virtual environment ...' && python3 -m venv venv
fi

echo 'Activating virtual environment ...' && source venv/bin/activate
echo 'Installing dependencies ...' && pip install --quiet -r tests/requirements.txt

if [[ ! -d 'logs' ]]; then
    echo 'Creating logs directory ...' && mkdir -p logs
fi

echo "Running automation tests ..."
python tests/dmv.py firefox "$@"
python tests/dmv.py chromium "$@"
echo 'Tests passed!'