import { Repo } from ".";

export const swiftRepo: Repo = {
	label: "Swift",
	url: "https://github.com/twostraws/BioBlitz",
	files: [
		{
			path: "BioBlitz/BacteriaView.swift",
			code: `
import SwiftUI

struct BacteriaView: View {
    var bacteria: Bacteria
    var rotationAction: () -> Void

    var image: String {
        switch bacteria.color {
        case .red:
            return "chevron.up.square.fill"
        case .green:
            return "chevron.up.circle.fill"
        default:
            return "chevron.up.circle"
        }
    }

    var body: some View {
        ZStack {
            Button(action: rotationAction) {
                Image(systemName: image)
                    .resizable()
                    .foregroundColor(bacteria.color)
            }
            .buttonStyle(.plain)
            .frame(width: 32, height: 32)

            Rectangle()
                .fill(bacteria.color)
                .frame(width: 3, height: 8)
                .offset(y: -20)
        }
        .rotationEffect(.degrees(bacteria.direction.rotation))
    }
}

struct BacteriaView_Previews: PreviewProvider {
    static var previews: some View {
        BacteriaView(bacteria: Bacteria(row: 0, col: 0)) {
            
        }
    }
}
            `
		},
		{
			path: "BioBlitz/Bacteria.swift",
			code:
				`
                import SwiftUI

class Bacteria {
    enum Direction: CaseIterable {
        case north, south, east, west

        var rotation: Double {
            switch self {
            case .north: return 0
            case .south: return 180
            case .east: return 90
            case .west: return 270
            }
        }

        var opposite: Direction {
            switch self {
            case .north: return .south
            case .south: return .north
            case .east: return .west
            case .west: return .east
            }
        }

        var next: Direction {
            switch self {
            case .north: return .east
            case .east: return .south
            case .south: return .west
            case .west: return .north
            }
        }
    }

    var row: Int
    var col: Int

    var color = Color.gray
    var direction = Direction.north

    init(row: Int, col: Int) {
        self.row = row
        self.col = col
    }
}
`
		},
		{
			path: "BioBlitz/GameBoard.swift",
			code:
				`
                import SwiftUI

                class GameBoard: ObservableObject {
                    let rowCount = 11
                    let columnCount = 22
                
                    @Published var grid = [[Bacteria]]()
                
                    @Published var currentPlayer = Color.green
                    @Published var greenScore = 1
                    @Published var redScore = 1
                
                    @Published var winner: String? = nil
                
                    private var bacteriaBeingInfected = 0
                
                    init() {
                        reset()
                    }
                
                    func reset() {
                        winner = nil
                        currentPlayer = .green
                        redScore = 1
                        greenScore = 1
                
                        grid.removeAll()
                
                        for row in 0..<rowCount {
                            var newRow = [Bacteria]()
                
                            for col in 0..<columnCount {
                                let bacteria = Bacteria(row: row, col: col)
                
                                if row <= rowCount / 2 {
                                    if row == 0 && col == 0 {
                                        // make sure the player starts pointing away from anything
                                        bacteria.direction = .north
                                    } else if row == 0 && col == 1 {
                                        // make sure nothing points to the player
                                        bacteria.direction = .east
                                    } else if row == 1 && col == 0 {
                                        // make sure nothing points to the player
                                        bacteria.direction = .south
                                    } else {
                                        // all other pieces are random
                                        bacteria.direction = Bacteria.Direction.allCases.randomElement()!
                                    }
                                } else {
                                    // mirror the counterpart
                                    if let counterpart = getBacteria(atRow: rowCount - 1 - row, col: columnCount - 1 - col) {
                                        bacteria.direction = counterpart.direction.opposite
                                    }
                                }
                
                                newRow.append(bacteria)
                            }
                
                            grid.append(newRow)
                        }
                
                        grid[0][0].color = .green
                        grid[rowCount - 1][columnCount - 1].color = .red
                    }
                
                    func getBacteria(atRow row: Int, col: Int) -> Bacteria? {
                        guard row >= 0 else { return nil }
                        guard row < grid.count else { return nil }
                        guard col >= 0 else { return nil }
                        guard col < grid[0].count else { return nil }
                        return grid[row][col]
                    }
                
                    func infect(from: Bacteria) {
                        objectWillChange.send()
                
                        var bacteriaToInfect = [Bacteria?]()
                
                        // direct infection
                        switch from.direction {
                        case .north:
                            bacteriaToInfect.append(getBacteria(atRow: from.row - 1, col: from.col))
                        case .south:
                            bacteriaToInfect.append(getBacteria(atRow: from.row + 1, col: from.col))
                        case .east:
                            bacteriaToInfect.append(getBacteria(atRow: from.row, col: from.col + 1))
                        case .west:
                            bacteriaToInfect.append(getBacteria(atRow: from.row, col: from.col - 1))
                        }
                
                        // indirect infection from above
                        if let indirect = getBacteria(atRow: from.row - 1, col: from.col) {
                            if indirect.direction == .south {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from below
                        if let indirect = getBacteria(atRow: from.row + 1, col: from.col) {
                            if indirect.direction == .north {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from left
                        if let indirect = getBacteria(atRow: from.row, col: from.col - 1) {
                            if indirect.direction == .east {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        // indirect infection from right
                        if let indirect = getBacteria(atRow: from.row, col: from.col + 1) {
                            if indirect.direction == .west {
                                bacteriaToInfect.append(indirect)
                            }
                        }
                
                        for case let bacteria? in bacteriaToInfect {
                            if bacteria.color != from.color {
                                bacteria.color = from.color
                                bacteriaBeingInfected += 1
                
                                Task { @MainActor in
                                    try await Task.sleep(nanoseconds: 50_000_000)
                                    bacteriaBeingInfected -= 1
                                    infect(from: bacteria)
                                }
                            }
                        }
                
                        updateScores()
                    }
                
                    func rotate(bacteria: Bacteria) {
                        guard bacteria.color == currentPlayer else { return }
                        guard bacteriaBeingInfected == 0 else { return }
                        guard winner == nil else { return }
                
                        objectWillChange.send()
                
                        bacteria.direction = bacteria.direction.next
                
                        infect(from: bacteria)
                    }
                
                    func changePlayer() {
                        if currentPlayer == .green {
                            currentPlayer = .red
                        } else {
                            currentPlayer = .green
                        }
                    }
                
                    func updateScores() {
                        var newRedScore = 0
                        var newGreenScore = 0
                
                        for row in grid {
                            for bacteria in row {
                                if bacteria.color == .red {
                                    newRedScore += 1
                                } else if bacteria.color == .green {
                                    newGreenScore += 1
                                }
                            }
                        }
                
                        redScore = newRedScore
                        greenScore = newGreenScore
                
                        if bacteriaBeingInfected == 0 {
                            withAnimation(.spring()) {
                                if redScore == 0 {
                                    winner = "Green"
                                } else if greenScore == 0 {
                                    winner = "Red"
                                } else {
                                    changePlayer()
                                }
                            }
                        }
                    }
                }
`
		
		}
	]
}
