#!/usr/bin/env python
from __future__ import print_function
import os
import json
import yaml


def input_or_default(prompt, fallback):
    a = raw_input('{} ({}):'.format(prompt, fallback))
    return a if a is not '' else fallback


def main():
    root = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))

    name = raw_input('Package name: ').replace(' ', '')
    description = input_or_default('Package description', '[none]')
    section = input_or_default('Package section', 'XenHTML Widgets')

    pkg = 'com.puls0ne.' + name.lower()

    with open(os.path.join(root, 'tools', 'debctl-template.json'), 'r') as cf:
        ctl = json.load(cf)
        for key in ctl.keys():
            if '<pkg>' in ctl[key]:
                ctl[key] = ctl[key].replace('<pkg>', pkg)
            if '<pkg-name>' in ctl[key]:
                ctl[key] = ctl[key].replace('<pkg-name>', name.lower())
            if '<name>' in ctl[key]:
                ctl[key] = ctl[key].replace('<name>', name)
            if '<desc>' in ctl[key]:
                ctl[key] = ctl[key].replace('<desc>', description)
            if '<section>' in ctl[key]:
                ctl[key] = ctl[key].replace('<section>', section)
            if '<section-abbrev>' in ctl[key]:
                abbrev = ''.join([x[0] for x in section.split(' ')])
                ctl[key] = ctl[key].replace('<section-abbrev>', abbrev)
        ctlpath = os.path.join(root, 'src', name, 'DEBIAN')
        os.makedirs(ctlpath)
        with open(os.path.join(ctlpath, 'control'), 'w') as ctlfile:
            yaml.safe_dump(ctl, ctlfile, allow_unicode=True, default_flow_style=False)


if __name__ == '__main__':
    main()
