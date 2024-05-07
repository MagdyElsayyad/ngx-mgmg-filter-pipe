<h1 align="center">Angular17+ Filter Pipe</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ngx-mgmg-filter-pipe">
    <img src="https://img.shields.io/npm/dm/ngx-mgmg-filter-pipe.svg?style=flat" alt="downloads">
  </a>
  
  <a href="https://www.npmjs.com/package/ng2-filter-pipe">
    <img src="https://img.shields.io/npm/dm/ng2-filter-pipe.svg?style=flat" alt="downloads">
  </a>
  
  <a href="https://badge.fury.io/js/ngx-mgmg-filter-pipe">
    <img src="https://badge.fury.io/js/ngx-mgmg-filter-pipe.svg" alt="npm version" height="18">
  </a>
  
  <a href="https://david-dm.org/MagdyElsayyad/ngx-mgmg-filter-pipe" title="dependencies status">
    <img src="https://david-dm.org/MagdyElsayyad/ngx-mgmg-filter-pipe.svg" height="18">
  </a>
  
  <a href="https://greenkeeper.io/" title="Greenkeeper badge">
    <img src="https://badges.greenkeeper.io/MagdyElsayyad/ngx-mgmg-filter-pipe.svg" alt="Greenkeeper badge" />
  </a>
  
  <a href="https://www.paypal.me/MagdyElsayyad" title="Donate to this project using Paypal">
    <img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" />
  </a>
</p>

> Filter arrays
 
Angular +17 pipeline for filtering arrays.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/3748453/23809236/3276cf26-05cd-11e7-94f7-b4078104adbd.gif" width="300">
</p>

### Demo Page

[https://MagdyElsayyad.github.io/ngx-mgmg-filter-pipe/](https://MagdyElsayyad.github.io/ngx-mgmg-filter-pipe/)



##### In HTML template

```
{{ collection | filterBy: searchTerm }}
```

### Arguments

| Param | Type | Details |
| --- | --- | --- |
| collection | `array` | The collection to filter |
| searchTerm  | `string` or `number` or `object` or `array` or `function` | Predicate used to filter items from `collection` |

## Install

```
npm install ngx-mgmg-filter-pipe 
```


## Usage

Import `FilterPipe` to your Standalone component or Module

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FilterPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

```

And use pipe in the template
```ts
import { Component } from '@angular/core';
 
@Component({
  selector: 'example-app',
  standalone: true,
  imports: [FilterPip],
  template: `
    <div>
        <input type="text" [(ngModel)]="userFilter.name" placeholder="name">
        <ul>
          <li *ngFor="let user of users | filterBy: userFilter">{{ user.name }}</li>
          
          <!-- in case you want to show empty message -->
          <li *ngIf="(users | filterBy: userFilter).length === 0">No matching elements</li>
        </ul>
    </div>  
  `
})
 
export class AppComponent {
  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  userFilter: any = { name: '' };
}
```

### $or matching
Use `$or` to filter by more then one values.

`$or` expects an `Array`.

In your component:
```ts
// your array
const languages = ['English', 'German', 'Russian', 'Italian', 'Ukrainian'];
// your $or filter
const filter = { $or: ['German', 'English'] };
```

In your template:
```html
<div *ngFor="let language of languages | filterBy: filter">
  {{ language }}
</div>
```

Result will be:
```html
<div>English</div>
<div>German</div>
```

#### $or example with nessted values
In your component:
```ts
// your array
const languages = [
  { language: 'English' },
  { language: 'German' },
  { language: 'Italian' }
];

// your $or filter
const filter = {
  language: {
    $or: ['Italian', 'English']
  }
};
```

In your template:
```html
<div *ngFor="let object of languages | filterBy: filter">
  {{ object.language }}
</div>
```

Result:
```html
<div>English</div>
<div>Italian</div>
```

#### $or example with multiple predicates

```
const objects = [
  { name: 'John' },
  { firstName: 'John' }
]

const filter = { $or: [{ name: 'John' }, { firstName: 'John' }] }
```
In your template:
```html
<div *ngFor="let object of objects | filterBy: filter">
  {{ object | json }}
</div>
```

Result:
```html
<div>{ name: 'John' }</div>
<div>{ firstName: 'John' }</div>
```

### Use FilterPipe in a component

Inject `FilterPipe` into your component and use it:

```ts
class AppComponent {
  objects = [
    { name: 'John' },
    { name: 'Nick' },
    { name: 'Jane' }
  ];
  
  constructor(private filter: FilterPipe) {
    let result = this.filter.transform(this.objects, { name: 'J' });
    console.log(result); // [{ name: 'John' }, { name: 'Jane' }]
  }
}
```



## Contribute

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Magdy Elsayyad](https://github.com/MagdyElsayyad)
