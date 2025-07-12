## 6. Implementation Strategy & Roadmap

This document outlines a phased approach to implementing the catechesis management application, ensuring a solid data foundation, incremental UI development, clear API separation, and seamless front-end integration.

---

### Phase 0: Database Modeling

**Objectives**

- Define all database tables, fields, relationships, and constraints before coding.
- Generate ER diagrams and prepare migration scripts.

**Key Tasks**

1. **Entity Definitions**
   - Levels, Rooms, Catechizands, Representatives, Catechists
   - Sessions, AttendanceRecords, Assessments, HomeworkAssignments
2. **Field & Type Specification**
   - Set explicit column types, nullability, unique constraints
   - Foreign keys linking related tables
   - Enum definitions (e.g., attendance status), check constraints (grades 1–10)
3. **ER Diagram & Documentation**
   - Create a Mermaid ER diagram for all entities and relations
   - Document any special rules (e.g., one catechizand per room per year)
4. **Migration Setup**
   - Configure TypeORM (or Prisma) migrations
   - Write initial “create tables” migration script

---

### Phase 1: Project Initialization & Yearly Bootstrapping

**Objectives**

- Scaffold the repository, configure linting, styling, and automate year-start tasks.

**Key Tasks**

1. **Next.js Skeleton**
   - Create folder structure: `/src/app`, `/src/components`, `/src/lib`, `/migrations`
   - Install and configure Tailwind CSS, ESLint, Prettier, and TypeScript path aliases
2. **Environment Configuration**
   - Add `.env.example` with placeholders for DB connection string, JWT secret
3. **Database Connection Module**
   - Implement `src/lib/db.ts` initializing TypeORM connection pool
4. **Yearly Bootstrap Script**
   - Script (`npm run bootstrap-year`) to create Levels, Rooms, assign catechists placeholders

---

### Phase 2: Frontend Layout & Navigation

**Objectives**

- Build core UI shell: layout, navigation, and role-based routing.

**Key Tasks**

1. **App Layout**
   - Header (logo, user menu), Sidebar (role-based links)
2. **Route Guards**
   - Middleware or HOC to redirect based on user role (Admin, Catechist, Parent)
3. **Placeholder Pages**
   - Create empty pages for Dashboard, Rooms, Sessions, Attendance, Grades, Parent view
4. **Design System**
   - Define Tailwind design tokens: colors, typography, spacing

---

### Phase 3: Backend API Endpoints

**Objectives**

- Develop secure RESTful API endpoints for all operations.

**Key Tasks**

1. **Authentication**
   - Login endpoint using national ID; issue JWTs with role claim
2. **CRUD Endpoints**
   - Levels, Rooms, Catechizands, Representatives, Catechists
3. **Session Management**
   - `POST /sessions`, `GET /rooms/:id/sessions`, `PATCH /sessions/:id/justify`
4. **Attendance & Grades**
   - `POST /sessions/:id/attendance`, `PATCH /attendance/:id/justify`
   - `POST /catechizands/:id/assessments`, `POST /catechizands/:id/homework`
5. **Admin Utilities**
   - Endpoint for year bootstrap, migrations health check
6. **Validation & Error Handling**
   - Use Zod or Yup for request schemas; standardized error responses

---

### Phase 4: Frontend Consumption & Final Polish

**Objectives**

- Connect UI components to APIs, implement forms, grids, and detailed views.

**Key Tasks**

1. **Data Fetching Layer**
   - Create `src/lib/api.ts` using Fetch or React Query for data fetching
2. **Rooms & Sessions UI**
   - List Rooms, view Sessions, create Session form
3. **Attendance Grid**
   - Table with rows for catechizands; radio buttons/select for Present/Absent/Justified
4. **Justification Modal**
   - Inline modal for adding justification note and attachments
5. **Assessment & Homework Forms**
   - On catechizand detail page: list existing grades, form to add new
6. **Parent Dashboard**
   - Summary metrics: attendance %, average grade, absence count; link to detail
7. **End-to-End Testing**
   - Write Cypress or Playwright tests for key flows (login, attendance, justify, grade, parent view)
8. **Responsive Design QA**
   - Test and refine on mobile/tablet breakpoints; ensure touch-friendly interactions
