import os

cwd = os.getcwd()
allFiles = os.listdir(cwd)

for item in allFiles:
    if item.endswith(".css"):
        os.remove(os.path.join(cwd, item))

colors = {
    'indigo': '#6610f2',
    'persianIndigo': '#32127A',
    'teal': '#20c997',
    'teal2': '#39CCCC',
    'white': '#fff',
    'gray': '#6c757d',
    'gray-dark': '#343a40',
    'primary': '#007bff',
    'secondary': '#6c757d',
    'success': '#28a745',
    'olive': '#3D9970',
    'green': '#2ECC40',
    'lime': '#01FF70',
    'persianGreen': '#00A693',
    'info': '#17a2b8',
    'warning': '#ffc107',
    'yellow': '#FFDC00',
    'amazon': '#FF9900',
    'orange': '#FF851B',
    'red': '#FF4136',
    'danger': '#dc3545',
    'youtube': '#FF0000',
    'google': '#EA4335',
    'dark': '#343a40',
    'black': '#111111',
    'navy': '#001F3F',
    'blue': '#0074D9',
    'persianBlue': '#1C39BB',
    'twitter': '#1DA1F2',
    'facebook': '#3B5998',
    'linkedin': '#0077B5',
    'skype': '#00AFF0',
    'aqua': '#7FDBFF',
    'fuchsia': '#F012BE',
    'purple': '#B10DC9',
    'maroon': '#85144B',
    'gray': '#AAAAAA',
    'silver': '#DDDDDD',
    'light': '#f8f9fa',
    'aubergine': '#5E2750',
    'yahoo': '#410093',
}

f = open('colors.css', 'a')
f.write('/*'+'\n')
for key in colors:
    f.write('   '+key+'\n')
f.write('*/'+'\n')
f.close()


for key in colors:
    f = open('colors.css', 'a')
    f.write('.bg-'+key +
            ' {background-color: '+colors[key]+' !important}'+'\n')
    f.write('.text-'+key +
            ' {color: '+colors[key]+' !important}'+'\n')
    f.write('.border-'+key +
            ' {border-color: '+colors[key]+' !important}'+'\n')
    # f.write('.fill-'+key +
    #         ' {fill: '+colors[key]+' !important}'+'\n')
    # f.write('.stroke-'+key +
    #         ' {stroke: '+colors[key]+' !important}'+'\n')
    f.close()
