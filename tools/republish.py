#!/usr/bin/env python

from __future__ import print_function
import os
import subprocess
import sys
import yaml


def main():
    root = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
    packages = os.listdir(os.path.join(root, 'src'))
    print('Choose package to republish:')
    i = 0
    for p in packages:
        print('    {}  =  {}'.format(i, p))
        i += 1
    choice = raw_input('> ')
    try:
        choice = int(choice)
        if choice >= len(packages):
            raise ValueError
    except ValueError:
        print('Invalid choice', file=sys.stderr)
        sys.exit(1)

    pkg = packages[choice]
    with open(os.path.join(root, 'src', pkg, 'DEBIAN', 'control'), 'r') as cf:
        ctl = yaml.load(cf)
        version = ctl.get('Version')
    print('Republishing {} (v{})...'.format(pkg, version))

    deb = 'com.pulse0ne.{}-{}.deb'.format(pkg.lower(), version)
    try:
        pkgpath = os.path.join(root, 'src', pkg)
        subprocess.check_output(['dpkg-deb', '-b', pkgpath], cwd=root)
        subprocess.check_output(['mv', '{}.deb'.format(pkgpath), os.path.join(root, 'debs', deb)], cwd=root)
        o = subprocess.check_output(['dpkg-scanpackages', './debs'], cwd=root)
        with open(os.path.join(root, 'Packages'), 'w') as pkgdesc:
            pkgdesc.write(o)
        subprocess.check_output(['bzip2', '-fks', os.path.join('Packages')], cwd=root)
    except Exception, e:
        print('Failed to republish! {}'.format(str(e)), file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
